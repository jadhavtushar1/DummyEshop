import './LoginPage.css'
import gitIcon from '../../Assets/github.svg'
import linkedIcon from '../../Assets/linkedin.svg'
import resume from '../../Assets/file-person.svg'
import { HtmlHTMLAttributes, useEffect, useState } from 'react'
import { useAppDispatch } from '../../Redux/Hooks/Hooks'
import { authenticateUser } from '../../Redux/Slices/AuthinticateSlice'
import { useAppSelector } from '../../Redux/Hooks/Hooks'
import { useNavigate } from 'react-router-dom'

const LoginPage = ()=>{
    const error = useAppSelector((state:any )=>state.authData.error)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [loginOpen,setLoginOpen] =useState(true)
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [isError,setError] = useState(false)

    const handleSigninClick = async()=>{
        if (userName && password) {
            
            await dispatch(authenticateUser({ username: userName, password: password }));
            
        }
    }
    useEffect(()=>{
        if(error===0) {
            setError(false)
            navigate('/HomePage')
            
        }
        else{
            setError(true)
            
        }
    },[error])
    
    
    const handleUname = (event: any)=>{
         const value = (event.target as HTMLInputElement).value
         setUserName(value)
    }
    const handlePassword = (event: any)=>{
        const value = (event.target as HTMLInputElement).value
        setPassword(value)
    }

    const handleCreateNowClick = ()=>{
        setLoginOpen(false)
        setUserName('')
        setPassword('')
    }

    const handlealreadyclick = ()=>{
        setLoginOpen(true)
    }

    return (
        <div className="login-parent">
            <div className='login-box-parent'>
                <div className='text-box'>
                <h1 className='icon-text'>STORE.</h1>
                </div>
                {loginOpen ? (
                <div className='login-details-box m-4'>
                     <div className="input-group mb-3">
                        <input onChange={(e)=>handleUname(e)} value={userName} type="text" className="form-control text-field-css" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    </div>
                    <div className="input-group mb-3">
                        <input onChange={(e)=>handlePassword(e)} value={password} type="password" className="form-control text-field-css" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    </div>
                    <button type="button" className="btn btn-success w-100 sign-btn" onClick={()=>handleSigninClick()}>Sign in</button>
                    {(isError && error===1) &&
                    <div className='dummy-details incorrect-box mt-3 mb-3'>{"Invalid User Details"}</div>}
                    {/* <h5 className='mt-3 help-text'>Need Help ?</h5> */}
                    {(isError && error===1) &&
                    <div className='dummy-details'>{"{uname : 'kminchelle' pass : '0lelplR'}"}</div>}
                    <button type="button" className="btn btn-info w-100 mt-3 create-btn" onClick={()=>handleCreateNowClick()}>Create Account</button>
                </div>
                ):(
                    <div className='login-details-box m-4'>
                        <div className="input-group mb-3">
                                <input type="text" value={userName} className="form-control text-field-css" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <div className="input-group mb-3">
                                <input type="password" value={password} className="form-control text-field-css" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <div className="input-group mb-3">
                                <input type="text" className="form-control text-field-css" placeholder="Age" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        </div>
                        <button type="button" className="btn btn-success w-100 sign-btn">Sign up</button>
                        <h5 className='mt-3 help-text'>Need Help ?</h5>
                        <button type="button" className="btn btn-info w-100 mt-3 create-btn" onClick={handlealreadyclick}>Already have an account ?</button>
                        
                        
                    </div>
                )}
                <div className='media-links d-flex justify-content-center mb-3 '>
                    <img src={gitIcon} alt=''/>
                    <img src={linkedIcon} alt=''/>
                    <img src={resume} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage