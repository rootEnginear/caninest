import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <h1 class="text-5xl text-red-500 font-bold">Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
