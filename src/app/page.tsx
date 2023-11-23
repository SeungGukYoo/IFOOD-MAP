import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li>
          <Link href="/stores">Stores</Link>
        </li>
        <li>
          <Link href="/stores/new">new page</Link>
        </li>
        <li>
          <Link href="/stores/1">detail page</Link>
        </li>
        <li>
          <Link href="/stores/1/edit">edit page</Link>
        </li>
        <li>
          <Link href="/user/likes">likes page</Link>
        </li>
        <li>
          <Link href="/user/login">login page</Link>
        </li>
        <li>
          <Link href="/user/mypage">my page</Link>
        </li>
      </ul>
    </main>
  );
}
