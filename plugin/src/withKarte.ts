import { ConfigPlugin, createRunOncePlugin } from "expo/config-plugins";
import { withKarteAndroid } from "./withKarteAndroid";
import { withKarteiOS } from "./withKarteiOS";
import { ConfigProps } from './types';
import { withKarteInfoPlist } from "./withKarteInfoPlist";

const withKarte: ConfigPlugin<ConfigProps> = (
  config,
  props
) => {
  config = withKarteInfoPlist(config, props);
  config = withKarteiOS(config, props);
  config = withKarteAndroid(config, props);
  return config;
};

const pkg = require("../package.json");

export default createRunOncePlugin(
  withKarte,
  pkg.name,
  pkg.version
);
