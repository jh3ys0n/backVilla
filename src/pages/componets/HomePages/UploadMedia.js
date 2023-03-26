import React, { useState } from "react";
import axios from "axios";
function UploadMedia(props) {
  
    const [name_props, setName_props] = useState(props.name); 
    const [file, setFile] = useState({title:"",subTitle:""}); 
    const [post, setPost] = React.useState();
    const [imageData, setImageData] = useState('');
   
  
  React.useEffect(() => {
    axios.get("http://localhost:8080/api/mediaFinder/portadas/"+props.name, { responseType: 'arraybuffer' })
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setImageData('data:image/png;base64,' + base64);
       
      })
      .catch(error => {
        console.log(error);
      });

      axios.get("http://localhost:8080/api/mediaFinder/portadas/get/"+props.name)
      .then(response => setPost(response.data))
      .catch(error => console.log(error));
     
    }, []);
    function handleChange(e) {

        if(e.target.name=="title" || e.target.name=="subTitle"){
          setFile({
            ...file,
            [e.target.name]:e.target.value
          });
        }
        else{
          setImageData(URL.createObjectURL (e.target.files[0]));
          setFile({
            ...file,
            [name_props]:URL.createObjectURL (e.target.files[0]),["document"]:e.target.files[0]
            
          }
          
          );
          
       }   
    }

    
 
    function createPost() {
      const formdata = new FormData();
      formdata.append("title", file.title);
      formdata.append("subTitle", file.subTitle);
      formdata.append("slug", props.name);
      formdata.append("document",file.document);
       axios
        .put("http://localhost:8080/api/mediaFinder/", formdata)
        .then((res) => {
          setPost(res);
        });
        
    }
   
    return (
    <>
  <form name={props.name} encType='multipart/form-data'  >
   <div className='mx-10 '>
      <label for="title" class="block mb-5 text-sm font-medium text-gray-900 ">{props.name} </label>
      <div class="flex items-center justify-center w-full">
         <label for={name_props} class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
         Click para cambiar de imagen
         <img className='object-cover h-full w-48' src={imageData} ></img>
         <input id={name_props}  type="file" class="hidden"  name={name_props} onChange={handleChange} ></input>
         </label>
      </div>
      <div class="my-10">
         <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Titulo</label>
         <input type="" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required value={file.title}  onChange={handleChange} name="title" />
      </div>
      <div class="mb-6">
         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Descipcion</label>
         <input type="" id="subTitle" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required name="subTitle" value={file.subTitle} onChange={handleChange} />
      </div>
      <div class="flex items-start mb-6">
      </div>
      <div className="mx-5">
      <button type="submit" class="mx-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={createPost}>Subir</button>
      <button type="button" class="mx-5 my-5 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" >Cancelar</button>
      </div>

   </div>
</form>
     </>
    


  )
}

export default UploadMedia