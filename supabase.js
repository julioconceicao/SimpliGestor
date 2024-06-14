import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lpcpttgwaghbkfqyszna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwY3B0dGd3YWdoYmtmcXlzem5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5NTYwODMsImV4cCI6MjAzMzUzMjA4M30.46H_b8FvZt_SNeTeYdBDWvqjdfnDtuDTvi-2IZoBsfk";

export const supabase = createClient(supabaseUrl, supabaseKey);
