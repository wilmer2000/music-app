import { IAppConfig } from '../interfaces/app-config.interface';

export class Utils {
    // https://musicbrainz.org/doc/MusicBrainz_API/Rate_Limiting#Provide_meaningful_User-Agent_strings
    // Example:
    // MyAwesomeTagger/1.2.0 ( http://myawesometagger.example.com )
    // MyAwesomeTagger/1.2.0 ( me@example.com )
    public static getUserAgentHeader(appConf: IAppConfig): string {
        const { appName, appVersion, appContactInfo }: IAppConfig = appConf;

        return `${appName}/${appVersion} ( ${appContactInfo} )`;
    }
}
