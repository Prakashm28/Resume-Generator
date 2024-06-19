import React from 'react';
import { useForm } from 'react-hook-form';

const ExtraDetails = ({ onSubmit, initialValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Skills</label>
        <textarea {...register('skills', { required: 'Skills are required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
        {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Career Objective</label>
        <textarea {...register('careerObjective', { required: 'Career Objective is required' })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
        {errors.careerObjective && <p className="text-red-500 text-xs mt-1">{errors.careerObjective.message}</p>}
      </div>
      <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md">Next</button>
    </form>
  );
};

export default ExtraDetails;
