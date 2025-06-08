import { useState } from 'react';
import { useStore } from './store';
import axios from 'axios';
import toast from 'react-hot-toast';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Artificial Delay
            
            const response = await axios.post('http://localhost:8000/pipelines/parse', {
                nodes,
                edges
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const { num_nodes, num_edges, is_dag } = response.data;
            toast.success(`Pipeline Submitted Succesfully!`);
            await new Promise(resolve => setTimeout(resolve, 3000)); // Artificial delay
            toast('📈 Calculating your nodes & edges!')
            await new Promise(resolve => setTimeout(resolve, 3000)); // Artificial delay

            toast(`Pipeline Submitted: ✅
                No. of Nodes: ${num_nodes}
                No. of Edges: ${num_edges}
                DAG?: ${is_dag}`, {duration: 5000})

        } catch (error) {
            console.log(error);
            toast.error("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center mb-2">
            <button
                onClick={handleSubmit}
                type="submit"
                disabled={loading}
                className={`
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    px-6
                    py-2
                    text-sm
                    font-medium
                    tracking-wide
                    text-white
                    bg-blue-600
                    rounded-lg
                    hover:bg-blue-700
                    focus:outline-none
                    hover:ring-2
                    focus:ring-blue-500
                    focus:ring-offset-2
                    transition-all
                    duration-200
                    ease-in-out
                    shadow-md
                    hover:shadow-lg
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                    overflow-hidden
                `}
            >
                <span className="flex items-center gap-2 whitespace-nowrap">
                    {loading ? (
                        <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-5 h-5 transition-transform group-hover:rotate-12 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    )}
                    <span className="truncate">{loading ? "Submitting..." : "Submit Workflow"}</span>
                </span>
            </button>
        </div>
    );
}
