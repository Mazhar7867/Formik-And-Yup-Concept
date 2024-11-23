import { ErrorMessage, Field, Form, Formik } from 'formik'
import {object , string } from 'yup';

const Formed = () => {

    const initialValue ={
        firstname:"",
        lastname:"",
        mobile : ""
    }

    const validationSchema = object().shape({
        firstname: string().required("please enter your first name"),
        lastname: string().required("please enter your last name"),
        mobile: string().matches(/^[789]\d{9}$/, "please enter valid mobile") // Fixed regex
        .required("please enter your mobile num")
    })
    const handleSubmit = (values ,formikHelpers)=>{
    setTimeout(()=>{
        console.log(values);
        formikHelpers.setSubmitting(false)
        formikHelpers.resetForm()
    } ,2000);
}
    return (
    <div className='flex justify-center p-4'>
        <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {/* CONDITIONAL RENDERING  */}
           {({isSubmitting})=>{
            
                return(
                    <Form className='flex flex-col gap-5'>
                   <div>
                    <Field  name="firstname"  type="text"   placeholder="enter your first name" />
                <ErrorMessage name="firstname">
                   {
                    (errMsg)=>{
                        return(
                            <p className='text-xs text-rose-500'>{errMsg}</p>
                        )
                    }
                   }
                </ErrorMessage>
                </div>
               
                <div>
                   <Field  name="lastname"   type="text" placeholder="enter your last name" />
                   <ErrorMessage name="lastname">
                   {
                    (errMsg)=>{
                        return(
                            <p className='text-xs text-rose-500'>{errMsg}</p>
                        )
                    }
                   }
                </ErrorMessage>
                </div>
                
                <div>
                    <Field  name="mobile"   type="text" placeholder="enter your mobile no" />
                    <ErrorMessage name="mobile">
                   {
                    (errMsg)=>{
                        return(
                            <p className='text-xs text-rose-500'>{errMsg}</p>
                        )
                    }
                   }
                </ErrorMessage>
                </div>

                   <button disabled={isSubmitting} type="submit" className='bg-sky-600 p-3 text-white rounded-md'>{ isSubmitting ? "Submitting" : "submit"} </button>
                </Form>
                )
            }
           }
        </Formik>

    </div>
  )
}

export default Formed