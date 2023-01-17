/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Properties required to create an OSVC channel.
 */
export interface CreateOsvcChannelDetails extends model.CreateChannelDetails {
  /**
   * The host.
   *
   * For OSVC, you can derive these values from the URL that you use to launch the Agent Browser User Interface
   * or the chat launch page. For example, if the URL is https://sitename.exampledomain.com/app/chat/chat_launch,
   * then the host is sitename.exampledomain.com.
   *
   * For FUSION, this is the host portion of your Oracle Applications Cloud (Fusion) instance's URL.
   * For example: sitename.exampledomain.com.
   *
   */
  "host": string;
  /**
   * The port.
   */
  "port": string;
  /**
   * The user name for the digital-assistant agent.
   */
  "userName": string;
  /**
   * The password for the digital-assistant agent.
   */
  "password": string;
  /**
   * The total session count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalSessionCount": number;
  /**
   * The type of OSVC service.
   */
  "channelService"?: model.OsvcServiceType;
  /**
   * The name of the Authentication Provider to use to authenticate the user.
   */
  "authenticationProviderName": string;
  /**
   * The ID of the Skill or Digital Assistant that the Channel is routed to.
   */
  "botId"?: string;

  "type": string;
}

export namespace CreateOsvcChannelDetails {
  export function getJsonObj(obj: CreateOsvcChannelDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelDetails.getJsonObj(obj) as CreateOsvcChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OSVC";
  export function getDeserializedJsonObj(
    obj: CreateOsvcChannelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateChannelDetails.getDeserializedJsonObj(obj) as CreateOsvcChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
}
