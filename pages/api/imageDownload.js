import axios from "axios"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { api } = req.body;            
            const response = await axios.post('https://testd5-img.azurewebsites.net/api/imgdownload', { api })

            return res.status(200).json(response.data)
        }
        catch (err) {
            console.log(err);
        
            return res.status(500).json({err: 'faild to load image'})
        }
    }
    
}