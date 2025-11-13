import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '20';
  const offset = searchParams.get('offset') || '0';

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon list: ${res.statusText}`);
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return NextResponse.json({ error: 'Failed to load Pokémon' }, { status: 500 });
  }
}
