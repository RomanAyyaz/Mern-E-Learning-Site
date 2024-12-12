import React from 'react';
import Header from './Header';
import CourseDetails from './CourseDetails';
import AddLectureForm from './AddLectureForm';
import LectureList from './LectureList';
import { useCourseIdStore } from '../../../Store/CourseIdStore';
import { useQuery } from '@tanstack/react-query';
import { getDataOfCourseApi } from '../CourseApis';

const ManageLectures = () => {
    const { courseId} = useCourseIdStore();
    //Api Calling for getting all the resumes 
    const { data, isLoading, error } = useQuery({
      queryKey: ["courses",courseId],
      queryFn: () => getDataOfCourseApi(courseId),
    });
    if(isLoading) {
      <h1>Loading....</h1>
    }
    if(error) {
      <h2>error</h2>
    }
    let courseData = data?.data || []
  return (
    <div className="bg-bgcompanyProfile container mx-auto px-3 md:px-8 border">
      <Header/>
      <div className="mt-8">
        <CourseDetails courseData={courseData} />
      </div>
      <div className="mt-8">
        <AddLectureForm  />
      </div>
      <div className="mt-8">
        <LectureList courseData={courseData} />
      </div>
    </div>
  );
};

export default ManageLectures;

