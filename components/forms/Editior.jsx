import React from 'react'
import "react-quill/dist/quill.snow.css";
import { useStateContext } from '../../context/StateContext';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});


const Editior = () => {
    const {quillValue, setQuillValue} = useStateContext()
    const handleChange = value => {
        setQuillValue(value);
    };
    const router = useRouter();


    let placeholderText = ""
    if(router.pathname === "/post-issue"){
      placeholderText = "Add your issue"
    }else if(router.pathname === "/post-blogs"){
      placeholderText = "Add you content"
    }else{
      placeholderText= "Enter your comment and code here"
    }


    const modules = {
      toolbar: [
    [{ size: [ 'small', false, 'large', 'huge' ] }],
    ['bold', 'italic', 'underline'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
    ],
    ["code-block"],
      ],
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true
      }
    };

    

  return (
    <>
        <ReactQuill
            theme="snow"
            value={quillValue}
            onChange={(value)=>handleChange(value)}
            placeholder={placeholderText}
            modules={modules}
        />
    </>
  )
}

export default Editior