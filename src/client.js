import { createClient } from '@supabase/supabase-js';

const URL = 'https://uafbnkrdolzgcyyeaimv.supabase.co';
const API_KEY = 'sb_publishable_Eu4kVb8iAx6hyF2e45v7VQ_QjonPmPw';

export const supabase = createClient(URL, API_KEY);