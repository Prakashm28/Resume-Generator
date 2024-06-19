import React from 'react';
import { useForm } from 'react-hook-form';

const EducationDetail = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">College Name</label>
        <input {...register('collegeName', { required: 'College Name is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.collegeName && <p className="text-red-500 text-xs mt-1">{errors.collegeName.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Major</label>
        <input {...register('collegeMajor', { required: 'Major is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.collegeMajor && <p className="text-red-500 text-xs mt-1">{errors.collegeMajor.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" {...register('collegeStartDate', { required: 'Start Date is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.collegeStartDate && <p className="text-red-500 text-xs mt-1">{errors.collegeStartDate.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" {...register('collegeEndDate', { required: 'End Date is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.collegeEndDate && <p className="text-red-500 text-xs mt-1">{errors.collegeEndDate.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">School Name (High School)</label>
        <input {...register('highSchoolName', { required: 'School Name is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.highSchoolName && <p className="text-red-500 text-xs mt-1">{errors.highSchoolName.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Major</label>
        <input {...register('highSchoolMajor', { required: 'Major is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.highSchoolMajor && <p className="text-red-500 text-xs mt-1">{errors.highSchoolMajor.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" {...register('highSchoolStartDate', { required: 'Start Date is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.highSchoolStartDate && <p className="text-red-500 text-xs mt-1">{errors.highSchoolStartDate.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" {...register('highSchoolEndDate', { required: 'End Date is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.highSchoolEndDate && <p className="text-red-500 text-xs mt-1">{errors.highSchoolEndDate.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">School Name (Secondary School)</label>
        <input {...register('secondarySchoolName', { required: 'School Name is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.secondarySchoolName && <p className="text-red-500 text-xs mt-1">{errors.secondarySchoolName.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Major</label>
        <input {...register('secondarySchoolMajor', { required: 'Major is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.secondarySchoolMajor && <p className="text-red-500 text-xs mt-1">{errors.secondarySchoolMajor.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" {...register('secondarySchoolStartDate', { required: 'Start Date is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.secondarySchoolStartDate && <p className="text-red-500 text-xs mt-1">{errors.secondarySchoolStartDate.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" {...register('secondarySchoolEndDate', { required: 'End Date is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        {errors.secondarySchoolEndDate && <p className="text-red-500 text-xs mt-1">{errors.secondarySchoolEndDate.message}</p>}
      </div>
      <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md">Next</button>
    </form>
  );
};

export default EducationDetail;
