import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json'; // adjust path from src → repo root
Amplify.configure(outputs);
