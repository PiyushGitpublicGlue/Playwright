import * as fs from 'fs';

async function globalTearDown(){
    console.log("From Global Tear Down file")
    fs.writeFileSync('teardown-log.txt', `Global Teardown executed at: ${new Date().toISOString()}\n`, { flag: 'a' });
}
export default globalTearDown