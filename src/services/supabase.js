import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xthexhkandcxaytznnfn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0aGV4aGthbmRjeGF5dHpubmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzODY0ODEsImV4cCI6MjAwNzk2MjQ4MX0._3W8Zo6FSkwuF4S_wcsoHxbe_VspsOW9yYirOLwDNZI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
