// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";

// const createQuiz = () => {
//     const navigate=useNavigate();

//     const [formData, setFormData] = useState({
//         topic: "",
//         difficulty: "",
//         number_of_questions: "",
//         total_marks: "",
//         time_limit: "",
//         document: null,
//     });

//     const [message, setMessage] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try{
//             const res=await toast.promise(
//                 axios.post("http://localhost:8000/api/quiz/create", {
//                     topic: formData.topic,
//                       difficulty: formData.difficulty,
//                     number_of_questions: formData.number_of_questions,
//                     total_marks: formData.total_marks,
//                     time_limit: formData.time_limit,
//                     document: formData.document,
//                 }, {
//                     headers: {
//                         "Content-Type": "multipart/form-data",
//                     },
//                 }),
//                 {
//                     loading: "Creating Quiz...",
//                     success: "Quiz Created Successfully",
//                     error: "Error Creating Quiz",
//                 } );
//         } catch (error) {
//                     setMessage("Error Creating Quiz");
//                 }
// }

// const MakeQuizzes = () => {
//   return (
//     <div>
//         <Navbar />
//         <div>
//             <form onSubmit={handleSubmit()}>
//                 <div>Create Quiz</div>
//             </form>
//         </div>
//         <Footer />
//     </div>
//   )
// }
// }

// export default MakeQuizzes;