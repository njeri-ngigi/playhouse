interface GamesProps {
  username: string;
}

export function Games({ username }: GamesProps) {
  return <div> Let&apos;s play some games, {username}</div>;
}
