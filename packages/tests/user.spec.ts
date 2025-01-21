import { describe, expect, test } from 'vitest'
import  axios from "axios"
const BACKEND_URL = "http://localhost:8080";

const PHONE_NUMBER = "7828248073";
const Name = "Ravi";

describe('Signup endpoints',()=>{

    test('Double Signup does not work', async() => {
  
        const response1 = await axios.post(`${BACKEND_URL}/api/v1/signup`,{
           number : PHONE_NUMBER
        })
    
       
        const response2 = await axios.post(`${BACKEND_URL}/api/v1/verify`,{
            name : Name,
            otp : "000000",
                })
                expect(response1.status).toBe(200);
                expect(response2.status).toBe(200);
                expect(response1.data.id).not.toBeNull();

                expect(async()=>{
                    await axios.post(`${BACKEND_URL}/api/v1/signup`,{
                        number : PHONE_NUMBER
                     })
                }).toThrow();
            })
        
   

   
})

