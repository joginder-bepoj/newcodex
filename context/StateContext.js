import axios from 'axios';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { toast } from "react-toastify"
import FormData from "form-data"
import {router} from "next/router"
import base64 from 'base-64';

const Context = createContext()

export const StateContext = ({ children }) => {

    let NEXT_APP_API_URL="https://api.codexview.com"
    let NEXT_APP_API_KEY="codexviewApi@123"

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if (userInfo) {
          setUser(userInfo);
        }
      }, []);
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [blogsId, setBlogsId] = useState(null)
    const [quillValue, setQuillValue] = useState(null);
    const [issueId, setIssueId] = useState(null)
    const [borderEmailError, setBorderEmailError] = useState(false)
    const [borderRegisterError, setBorderRegisterEmailError] = useState(false)
    const [borderPasswordError, setBorderPasswordError] = useState(false)
    const [borderRegisterPasswordError, setBorderRegisterPasswordError] = useState(false)
    const [borderConfirmPasswordError, setBorderConfirmPasswordError] = useState(false)
    const [borderNameError, setBorderNameError] = useState(false)
    const [borderUserNameError, setBorderUserNameError] = useState(false)
    const [borderForgetPassError, setBorderForgetPassError] = useState(false)
    const [forgetEmailPass, setForgetEmailPass] = useState('')
    const [borderContactNameErr, setBorderContactNameErr] = useState(false)
    const [borderContactEmailErr, setBorderContactEmailErr] = useState(false)
    const [borderContactPhoneErr, setBorderContactPhoneErr] = useState(false)
    const [borderContactSubjectErr, setBorderContactSubjectErr] = useState(false)
    const [borderContactMessageErr, setBorderContactMessageErr] = useState(false)
    const [borderCommentNameErr, setBorderCommentNameErr] = useState(false)
    const [borderCommentEmailErr, setBorderCommentEmailErr] = useState(false)
    const [borderProfilePassErr, setBorderProfilePassErr] = useState(false)
    const [borderProfileConfirmPassErr, setBorderProfileConfirmPassErr] = useState(false)
    const [borderResetPass, setBorderResetPass] = useState(false)
    const [borderResetConfirmPass, setBorderResetConfirmPass] = useState(false)
    const [blogsFile, setBlogsFile] = useState()
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        policy: ""
    })
    const [contactUS, setContactUS] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [commentsData, setCommentsData] = useState({
        name: "",
        email: ""
    })
    const [issuePostData, setIssuePostData] = useState({
        title: "",
        skill: ""
    })
    const [profileUpdate, setProfileUpdate] = useState({
        password: "",
        confirm_password: ""
    })
    const [blogPostData, setBlogPostData] = useState({
        title: "",
        skill: "",
        file: ""
    })
    const [resetPasswordData, setResetPasswordData] = useState({
        email: "",
        password: "",
        confirm_password: ""
    })

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if (userInfo) {
          setUser(userInfo);
        }
        setError(null)
        setCommentsData({
            name: "",
            email: ""
        })
        setQuillValue(null)
        setBorderConfirmPasswordError(false)
        setBorderEmailError(false)
        setBorderForgetPassError(false)
        setBorderNameError(false)
        setBorderPasswordError(false)
        setBorderRegisterEmailError(false)
        setBorderRegisterPasswordError(false)
        setBorderUserNameError(false)
        setBorderContactEmailErr(false)
        setBorderContactMessageErr(false)
        setBorderContactNameErr(false)
        setBorderContactSubjectErr(false)
        setBorderCommentEmailErr(false)
        setBorderCommentNameErr(false)
        setBorderContactPhoneErr(false)
        setBorderProfileConfirmPassErr(false)
        setBorderProfilePassErr(false)
        setBorderResetPass(false)
        setBorderResetConfirmPass(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[router])

    const toastOptions = {
        position: "top-center",
        autoClose: 8000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    let loginForm = new FormData()
    loginForm.append("email", loginData.email.trim())
    loginForm.append("password", loginData.password)

    let registerForm = new FormData()
    registerForm.append("name", registerData.name)
    registerForm.append("email", registerData.email.trim())
    registerForm.append("password", registerData.password.trim())
    registerForm.append("confirm_password", registerData.confirm_password.trim())

    let forgetPasswordForm = new FormData()
    forgetPasswordForm.append("email", forgetEmailPass.trim())

    let resetPasswordForm = new FormData()
    resetPasswordForm.append("email", resetPasswordData.email)
    resetPasswordForm.append("password", resetPasswordData.password)

    let issueCommentForm = new FormData()
    issueCommentForm.append("username", commentsData.name)
    issueCommentForm.append("email", commentsData.email.trim())
    quillValue && issueCommentForm.append("comment", quillValue)
    issueId && issueCommentForm.append("issue_id", issueId)

    let issuePostForm = new FormData() 
    issuePostForm.append("issue_title", issuePostData.title)
    issuePostForm.append("skill", issuePostData.skill)
    user && issuePostForm.append("email", user.email)
    user && issuePostForm.append("name", user.name)
    quillValue && issuePostForm.append("issue_description", quillValue)


    let blogPostForm = new FormData()
    blogPostForm.append("title", blogPostData.title)
    blogPostForm.append("skill", blogPostData.skill)
    blogsFile && blogPostForm.append("image", blogsFile)
    quillValue && blogPostForm.append("description", quillValue)
    user && blogPostForm.append("name", user.name)
    user && blogPostForm.append("email", user.email)


    let blogCommentForm = new FormData()
    blogsId && blogCommentForm.append("blog_id", blogsId)
    blogCommentForm.append("username", commentsData.name)
    blogCommentForm.append("email", commentsData.email.trim())
    quillValue && blogCommentForm.append("comment", quillValue)

    let contactUsForm = new FormData()
    contactUsForm.append("name", contactUS.name)
    contactUsForm.append("email", contactUS.email.trim())
    contactUsForm.append("phone", contactUS.phone.trim())
    contactUsForm.append("subject", contactUS.subject)
    contactUsForm.append("message", contactUS.message)

    let profileUpdateForm = new FormData()
    user && profileUpdateForm.append("email", user.email)
    profileUpdateForm.append("password", profileUpdate.password.trim())


    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { email, password } = loginData;
            if (email === "" || password === "") {
                if(email.length ===0){setBorderEmailError(true)}
                if(password.length ===0){setBorderPasswordError(true)}
                toast.error("All fields are mandatory", toastOptions)
                setLoading(false)
                return false;
            }else if(password.length<6){ 
                toast.error("Please enter password length greater then 6 characters", toastOptions)
                setBorderPasswordError(true)
                setLoading(false)
                return false;
            }else {
                const res = await axios.post(`${NEXT_APP_API_URL}/login`, loginForm, {
                    headers: {
                        "X-API-KEY": NEXT_APP_API_KEY,
                    }
                })
                router.push("/")
                const { password, ...otherData } = res.data[0]
                localStorage.setItem("user", JSON.stringify(otherData))
                const userInfo = JSON.parse(localStorage.getItem("user"));
                setLoading(false)
                setLoginData({
                    email: "",
                    password: ""
                })
                if (userInfo) {
                  setUser(userInfo);
                }
            }
        } catch (err) {
           console.log(err);
            if(err){
                toast.error("Incorrect email or password", toastOptions)
                setLoading(false)
            }
        }
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const { name, email, password, policy, confirm_password } = registerData;
            if (name === "" || email === "" || password === "" || confirm_password === "") {
                toast.error("All fields are mandatory", toastOptions)
                if(name.length === 0){ setBorderNameError(true)};
                if(email.length === 0){ setBorderRegisterEmailError(true)};
                if(password.length === 0){ setBorderRegisterPasswordError(true)};
                if(confirm_password.length ===0){setBorderConfirmPasswordError(true)}
                return false;
            }else if(password.length <6){
                toast.error("Password length must be greater then 6", toastOptions)
                return false;
            }else if(confirm_password.length < 6){
                toast.error("Confirm password can't be empty and must match to password", toastOptions)
                return false;
            }
            else if(policy=== ""){
                toast.error("Please accept Pricavy Policy", toastOptions)
                return false;
            }else {
                if (registerData.password === registerData.confirm_password) {
                    setLoading(true)
                    try {
                        const res = await axios.post(`${NEXT_APP_API_URL}/register_user`, registerForm, {
                            headers: {
                                "X-API-KEY": NEXT_APP_API_KEY
                            }
                        })
                        toast.success(res?.data?.message, toastOptions);
                        setRegisterData({
                            name: "",
                            email: "",
                            password: "",
                            confirm_password: "",
                        })
                        setLoading(false)
                    } catch (err) {
                        toast.error("Something went wrong please try later", toastOptions)
                        setLoading(false)
                        setError(err)
                    }
                    
                } else {
                    toast.error("Password should be same", toastOptions)
                    return false;
                }
            }
        } catch (err) {
            setError(err)
        }
    }
    const handleForgetPassword = async (e) =>{
        e.preventDefault()
        setLoading(true)
        try {
            if(forgetEmailPass === ""){
                toast.error("Please fill email address", toastOptions)
                if(forgetEmailPass.length === 0){setBorderForgetPassError(true)}
                return false;
            }else{
                setLoading(true)
                try {
                    const res = await axios.post(`${NEXT_APP_API_URL}/forget_password`, forgetPasswordForm, {
                        headers:{
                            "X-API-KEY": NEXT_APP_API_KEY
                        }
                    })
                    toast.success(res.data.message, toastOptions)
                    setForgetEmailPass("")
                    setLoading(false)
                } catch (err) {
                    toast.error("Some thing wnet wrong please try again later", toastOptions)
                    setLoading(false)
                    setError(err)
                }
            }
        } catch (err) {
            setError(err)
        }
    }
    const handleResetPassword = async (e) =>{
        e.preventDefault()
        const {password, confirm_password} = resetPasswordData
        if(password==="" || confirm_password==="" || password.length <6){
            toast.error("Passwords fields are mandatory and length must be more then 6 characters", toastOptions)
            setBorderResetConfirmPass(true)
            setBorderResetPass(true)
            return false;
        }else if(password !== confirm_password){
            toast.error("Password and confirm password does not match", toastOptions)
            setBorderResetConfirmPass(true)
            setBorderResetPass(true)
            return false;
        }else{
            setLoading(true)
            try {
                const res = await axios.post(`${NEXT_APP_API_URL}/profile_setting`, resetPasswordForm, {
                    headers: {
                        "X-API-KEY": NEXT_APP_API_KEY
                    }
                })
                toast.success(res.data.message, toastOptions)
                setResetPasswordData({
                    password: "",
                    confirm_password: ""
                })
                setLoading(false)
            } catch (err) {
                toast.error("Something went wrong please try again later", toastOptions)
                setLoading(false)
                console.log(err)
            }
        }
    }

    const handleLogout = () => {
        localStorage.clear()
        setUser(null)
        router.push("/")
    }
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message, phone } = contactUS;
        if (name === "" || email === "" || subject === "" || message === "" || phone ==="") {
            toast.error("All fields are mandatory", toastOptions)
            if(name.length===0){setBorderContactNameErr(true)}
            if(email.length===0){setBorderContactEmailErr(true)}
            if(phone.length===0){setBorderContactPhoneErr(true)}
            if(subject.length===0){setBorderContactSubjectErr(true)}
            if(message.length===0){setBorderContactMessageErr(true)}
            return false;
        }else if(phone.length !==10){
            toast.error("Please add valid phone number", toastOptions)
            setBorderContactPhoneErr(true);
            return false;
        } else {
            setLoading(true)
            try {
                const res = await axios.post(`${process.envNEXT_APP_API_URL}/contact_us`, contactUsForm, {
                    headers:{
                        "X-API-KEY": NEXT_APP_API_KEY,
                    }
                })
                toast.success(res.data.message, toastOptions)
                setContactUS({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                })
                setLoading(false)
            } catch (err) {
                toast.error("Something went wrong please try again after sometime!", toastOptions)
                setLoading(false)
                setError(err)
            }
        }
    }
    const handleIssueCommentSubmit = async (e) =>{
        e.preventDefault()
        const {name, email} = commentsData;
        if(name === "" || email === ""){
            toast.error("All fields are mandatory", toastOptions)
            if(name.length===0){setBorderCommentNameErr(true)}
            if(email.length===0){setBorderCommentEmailErr(true)}
            return false;
        }else if(quillValue===null){
            toast.error("Please fill the comment field", toastOptions)
            return false;
        }else{
            setLoading(true)
            try {
                const res = await axios.post(`${NEXT_APP_API_URL}/addIssue_comments`, issueCommentForm, {
                    headers: {
                        "X-API-KEY": NEXT_APP_API_KEY
                    }
                })
                toast.success(res.data[0].message, toastOptions);
                setCommentsData({
                    name: "",
                    email: ""
                })
                setQuillValue(null)
                setLoading(false)
            } catch (err) {
                toast.error("Something went wrong please try again after some time", toastOptions)
                setLoading(false)
                console.log(err)
            }
        }
    }
    const handleIssuePost = async (e) =>{
        e.preventDefault()
        const {title, skill} = issuePostData;
        if(title==="" || skill===""){
            toast.error("All fields are madatory", toastOptions)
            return false;
        }else if(quillValue === null){
            toast.error("Please add your issue", toastOptions)
            return false;
        }else{
            setLoading(true)
            try {
                const res = await axios.post(`${NEXT_APP_API_URL}/add_issue`, issuePostForm, {
                    headers: {
                        "X-API-KEY": NEXT_APP_API_KEY,
                    }
                })
                toast.success(res.data.message, toastOptions)
                setIssuePostData({
                    title: "",
                    skill: ""
                })
                setQuillValue(null)
                setLoading(false)
            } catch (err) {
                toast.error("Something went wrong please try again after sometime", toastOptions)
                setLoading(false)                
                setError(err)
            }
        }
    }
    const handleBlogsCommentSubmit = async (e) =>{
        e.preventDefault()
        const {name, email} = commentsData;
        if(name === "" || email === ""){
            toast.error("All fields are mandatory", toastOptions)
            if(name.length===0){setBorderCommentNameErr(true)}
            if(email.length===0){setBorderCommentEmailErr(true)}
            return false;
        }else if(quillValue===null){
            toast.error("Please fill the comment field", toastOptions)
            return false;
        }else{
            setLoading(true)
            try {
                const res = await axios.post(`${NEXT_APP_API_URL}/add_blog_comments`, blogCommentForm, {
                    headers: {
                        "X-API-KEY": NEXT_APP_API_KEY
                    }
                })
                toast.success(res.data.message, toastOptions);
                setCommentsData({
                    name: "",
                    email: ""
                })
                setQuillValue(null)
                setLoading(false)
            } catch (err) {
                toast.error("Something went wrong please try again after sometime", toastOptions)
                setLoading(false)
                setError(err)
            }
        }
    }
    const handleBlogPost = async (e) =>{
        e.preventDefault()
        const {title, skill} = blogPostData;
        if(title==="" || skill==="" ){
            toast.error("All fields are madatory", toastOptions)
            return false;
        }else if(blogsFile ===null){
            toast.error("Please add a file", toastOptions)
            return false;
        } else if(quillValue === null){
            toast.error("Please add your blogs description", toastOptions)
            return false;
        }else{
            setLoading(true)
            try {
                const res = await axios.post(`${NEXT_APP_API_URL}/add_blog`, blogPostForm, {
                    headers: {
                        "X-API-KEY": NEXT_APP_API_KEY,
                    }
                })
                toast.success(res.data[0].message, toastOptions)
                setBlogPostData({
                    title: "",
                    skill: "",
                    file: ""
                })
                setQuillValue(null)
                setLoading(false)
            } catch (err) {
                toast.error("Something went wrong please try again after some time", toastOptions)
                setLoading(false)
                setError(err)
            }
            
        }
    }

    const profileUpdateSubmit = async (e) =>{
        e.preventDefault()
        const {password, confirm_password} = profileUpdate;
        if(password ==="" || confirm_password ===""){
            toast.error("All fields are mandatory", toastOptions)
            if(password.length === 0){ setBorderProfilePassErr(true)};
            if(confirm_password.length ===0){setBorderProfileConfirmPassErr(true)}
            return false;
        }else if(password.length <6){
            toast.error("Password length must be greater then 6", toastOptions)
            setBorderProfilePassErr(true)
            return false;
        }else if(password !== confirm_password){
            toast.error("Password should be same", toastOptions)
            setBorderProfilePassErr(true)
            setBorderProfileConfirmPassErr(true)
            return false;
        }else{
            setLoading(true)
            try {
                const res = await axios.post(`${NEXT_APP_API_URL}/profile_setting`, profileUpdateForm, {
                    headers: {
                        "X-API-KEY": NEXT_APP_API_KEY
                    }
                })
                toast.success(res.data.message, toastOptions)
                setLoading(false)
            } catch (err) {
                toast.error("Something went wrong please try again after some time", toastOptions)
                setLoading(false)
                setError(err)
            }
        }
    }

    const handleProfileNavigate = (item) =>{
        if(!user){
            toast.error("You need to login first to see user profile", toastOptions)
            return false;
          }
          router.push(`/user/${base64.encode(item.email)}`)
    }

    return (
        <Context.Provider value={{ handleLogin, loginData, setLoginData, user, handleLogout, registerData, setRegisterData, handleRegister, error, loading, blogsId, setBlogsId, setContactUS, handleContactSubmit, contactUS, borderEmailError, setBorderEmailError, borderPasswordError, setBorderPasswordError, borderNameError, setBorderNameError, borderUserNameError, setBorderUserNameError, borderRegisterError, setBorderRegisterEmailError, setBorderRegisterPasswordError, borderRegisterPasswordError, borderConfirmPasswordError, setBorderConfirmPasswordError, setForgetEmailPass, borderForgetPassError, setBorderForgetPassError, handleForgetPassword, forgetEmailPass, borderContactNameErr, setBorderContactNameErr, borderContactEmailErr, setBorderContactEmailErr, borderContactSubjectErr, setBorderContactSubjectErr, borderContactMessageErr, setBorderContactMessageErr, borderCommentNameErr, setBorderCommentNameErr, borderCommentEmailErr, setBorderCommentEmailErr, handleIssueCommentSubmit, commentsData, setCommentsData, quillValue, setQuillValue, setIssueId, handleIssuePost, issuePostData, setIssuePostData, borderContactPhoneErr, setBorderContactPhoneErr, handleBlogsCommentSubmit, profileUpdateSubmit, profileUpdate, setProfileUpdate, borderProfilePassErr, setBorderProfilePassErr, borderProfileConfirmPassErr, setBorderProfileConfirmPassErr, handleBlogPost, blogPostData, setBlogPostData, handleResetPassword, borderResetPass, setBorderResetPass, borderResetConfirmPass, setBorderResetConfirmPass, resetPasswordData, setResetPasswordData, toastOptions, handleProfileNavigate, setBlogsFile}}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)



