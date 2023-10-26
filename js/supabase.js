// supabase.js
// Script para inicializar supabase

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js'

const supabaseUrl = 'https://jfziwaejkmzukwgwwxda.supabase.co';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmeml3YWVqa216dWt3Z3d3eGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTA1MzIsImV4cCI6MjAxMTA2NjUzMn0.jqG4efSGLveVIpXkFujFPXN9WmvdEp813OI4HfL4GgI';

const client = supabase.createClient(supabaseUrl, supabaseApiKey);

export default supabase;
