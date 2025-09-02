// Update your schema to handle the members array correctly
const schema = yup.object().shape({
  teamName: yup.string().required('Team name is required'),
  teamLeaderName: yup.string().required('Team leader name is required'),
  teamLeaderRollNumber: yup.string().required('Roll number is required'),
  batch: yup.string().required('Batch is required'),
  members: yup.array().of(
    yup.object().shape({
      idNumber: yup.string().required('ID number is required'),
      idName: yup.string().required('Name is required'),
      rollNumber: yup.string().required('Roll number is required'),
    })
  ).required().min(1, 'At least one member is required'), // Make it required instead of optional
});
