import { Navbar } from './components/Navbar';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="flex flex-col h-[98vh]  p-1 m-2 rounded-lg border-2 border-gray-200">
      <Navbar />
      <PipelineToolbar />
      <div className="flex-1 min-h-0">
        <PipelineUI />
      </div>
      <SubmitButton />
    </div>
  );
}

export default App;
