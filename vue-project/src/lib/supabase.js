import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uilcmqdawjcspsifszge.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpbGNtcWRhd2pjc3BzaWZzemdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMTQ4MjEsImV4cCI6MjA1Njg5MDgyMX0.BZ7QA67TkZJfSv5mRD7CR15uLIFBVXwTizK_Lr3v0CM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)