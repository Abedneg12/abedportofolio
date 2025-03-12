import { NextResponse } from 'next/server';
import supabase from '@/lib/supbase';

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Gagal menyimpan data' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}