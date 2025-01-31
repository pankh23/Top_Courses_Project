import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card=(props) => {

    let course=props.course;
    let likedCourse=props.likedCourse
    let setLikedCourses=props.setLikedCourses

    function clickHandler(){

        if(likedCourse.includes(course.id)){

            setLikedCourses((prev) => prev.filter((cid)=>(cid !== course.id)))
            toast.warning("Like Removed")
        }
        else{

            if(course.length===0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully")
        }

    }
    return(

        <div className="w-[300px] bg-bgDark bg-opacity-80 text-white overflow-hidden rounded-md">

            <div className="relative">

                <img src={course.image.url}/>

                <div className="h-[40px] w-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">

                    <button onClick={clickHandler}>
                        {
                            likedCourse.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>

            

            <div className="p-4">
                <p className="font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2">
                    
                    {
                        course.description.length>100?
                        (course.description.substr(0, 100)+"..."):
                        (course.description)
                    }
                </p>
            </div>


        </div>
    )
}

export default Card