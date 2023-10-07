const EmailTemplate = ({ name, subject, message }) => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-white mx-auto p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">{subject}</h1>
        <p className="text-gray-600">Thank you for contacting us, {name} !</p>
        <p className="text-gray-600">New message submitted:</p>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
