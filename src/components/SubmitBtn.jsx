import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  return (
    <div>
      <button type='submit' className='btn btn-accent btn-block'>
        {isSubmitting ? (
          <>
            <span className='loading loading-spinner'>Sending...</span>
          </>
        ) : (
          text || "Submit"
        )}
      </button>
    </div>
  );
};
export default SubmitBtn;
