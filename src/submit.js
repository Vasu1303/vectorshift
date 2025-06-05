import { isDisabled } from '@testing-library/user-event/dist/utils';
import {useStore} from '../src/store'
import axios from 'axios';


export const SubmitButton = () => {
    const nodes = useStore((state)=>state.nodes);
    const edges=  useStore((state)=>state.edges);

    const handleSubmit = async ()=>{

        try{
            const response = await axios.post('http://localhost:8000/pipelines/parse',{
                nodes, 
                edges
            }, {
                headers:{
                    'Content-Type':'application/json',
                },
                
            });
            const {num_nodes, num_edges, is_dag} = response.data;
            alert(`submmitted ${num_nodes}, ${num_edges}, ${is_dag}`)
        } catch(error){
            console.log(error)
            alert("error")
        }



    }

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
    );
}
