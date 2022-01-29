import { SharedUiKit, Button } from '@zero-one/shared/ui-kit';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="bg-white h-screen ">
      <div className="bg-blue-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi
        et temporibus distinctio harum soluta, molestias debitis itaque autem.
        Voluptas saepe minus reprehenderit dolor consequuntur cum vitae fugiat,
        dolores pariatur.
        {/* <Button> Halo </Button> */}
        <SharedUiKit />
        <Button> hallo </Button>
      </div>
    </div>
  );
}

export default Index;
