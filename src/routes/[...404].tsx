import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <>
      <Title>Not Found — Can I nest</Title>
      <HttpStatusCode code={404} />
      <main>
        <h1>Page Not Found</h1>
      </main>
    </>
  );
}
