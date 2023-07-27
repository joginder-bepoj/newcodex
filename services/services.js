import axios from "axios";

let NEXT_APP_API_URL = 'https://api.codexview.com/codexviewApi'
let NEXT_APP_API_KEY = 'codexviewApi@123'
export const issue = async () => {
    try {
        
        const res = await axios.get(
            `${NEXT_APP_API_URL}/getIssue`,
            {
                headers: {
                    "X-API-KEY": NEXT_APP_API_KEY,
                }
            }
        )
        return res.data
    } catch (err) {
        console.log(err);
    }
};

export const blogs = async () => {
    try {
        const res = await axios.get(`${NEXT_APP_API_URL}/getBlogs`, {
            headers: {
                "X-API-KEY": NEXT_APP_API_KEY,
            }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
};

export const skills = async () => {
    try {
        const res = await axios.get(
            `${process.env.NEXT_APP_API_URL}/getAllSkill`,
            {
                headers: {
                    "X-API-KEY": process.env.NEXT_APP_API_KEY,
                },
            }
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};