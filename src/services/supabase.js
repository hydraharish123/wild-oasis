import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nrkgkwmjezqjmzweliwx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ya2drd21qZXpxam16d2VsaXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDQzMjAsImV4cCI6MjA1NTg4MDMyMH0.2Nq9rq1kbzTg1-bUVC-pmWQkTaCKocSGYGpO-F9btC8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
