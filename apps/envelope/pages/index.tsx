import { Grid } from '@zero-one/shared/ui-tail';
import { useRecoilValue } from 'recoil';
import ExternalLink from '../assets/ExternalLink';
import Alert from '../components/common/Alert';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
// import Grid from '../components/common/Grid';
import Layout from '../components/layout/Layout';
import FormLogin from '../components/login/FormLogin';
import { AlertAtom } from '../recoil/Alert';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const alertMessage = useRecoilValue(AlertAtom);
  return (
    <Layout>
      <div className="w-full h-screen">
        <Grid className="h-full">
          <div className="hidden sm:block col-span-6 bg-blue-500">
            <div className="max-w-screen-md mx-auto h-full">
              <div className="flex flex-col items-center justify-center px-8 h-full max-w-lg mx-auto space-y-4">
                <h1 className="text-5xl font-bold text-white text-center leading-snug">
                  Introduction our 2020 Report
                </h1>
                <p className="text-white text-center text-lg mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore aliquam suscipit reiciendis dolores atque sint neque.
                </p>
                <Button
                  variant="outline"
                  size="large"
                  className="rounded-lg max-w-[250px] w-full flex items-center justify-center"
                >
                  View Report
                  <ExternalLink className="w-4 h-4 ml-3" />
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 bg-gray-100">
            <div className="max-w-screen-md mx-auto h-full">
              <div className="flex flex-col items-center justify-center px-8 h-full max-w-xl mx-auto space-y-4">
                <div className="flex flex-col text-left w-full">
                  <h1 className="text-3xl sm:text-5xl font-bold text-blue-500 mb-4">
                    Welcome back
                  </h1>
                  <h5 className="text-gray-500 mb-6 text-xl sm:text-3xl font-bold">
                    Sign In to Continue
                  </h5>
                </div>
                <Card>
                  {alertMessage?.type === 'error' ? (
                    <Alert title="Error!" variant="error">
                      {alertMessage.message}{' '}
                    </Alert>
                  ) : null}
                  {alertMessage?.type === 'success' ? (
                    <Alert title="Success!" variant="success">
                      {alertMessage.message}{' '}
                    </Alert>
                  ) : null}
                  <FormLogin />
                </Card>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Layout>
  );
}

export default Index;
