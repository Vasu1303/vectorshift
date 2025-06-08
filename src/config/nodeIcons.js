import { 
  FileInput, 
  
  FileOutput, 
  Brain, 
  FileType,
  Languages,
  Mail,
  FileText,
  Globe,
  Hash,
  ArrowUpAZ,
} from 'lucide-react';

export const NODE_CONFIG = [
  { 
    type: 'customInput', 
    label: 'Input',
    icon: FileInput,
    color: '#1C2536'
  },
  { 
    type: 'customOutput', 
    label: 'Output',
    icon: FileOutput,
    color: '#1C2536'
  },
  { 
    type: 'llm', 
    label: 'LLM',
    icon: Brain,
    color: '#1C2536'
  },
  { 
    type: 'text', 
    label: 'Text',
    icon: FileType,
    color: '#1C2536'
  },
  { 
    type: 'translate', 
    label: 'Translate',
    icon: Languages,
    color: '#1C2536'
  },
  { 
    type: 'emailValidator', 
    label: 'Email Validation',
    icon: Mail,
    color: '#1C2536'
  },
  { 
    type: 'summarizer', 
    label: 'Summarizer',
    icon: FileText,
    color: '#1C2536'
  },
  { 
    type: 'languageDetector', 
    label: 'Language Detection',
    icon: Globe,
    color: '#1C2536'
  },
  { 
    type: 'hashtag', 
    label: 'Hashtag Generator',
    icon: Hash,
    color: '#1C2536'
  },
  {
    type:'uppercase',
    label:'Upper Case',
    icon:ArrowUpAZ,
    color:"#1C2536"
  }
  


];