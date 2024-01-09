/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details required to update a Channel
 */
export interface UpdateChannelDetails {
  "source"?: model.UpdateChannelSourceFromMysqlDetails;
  "target"?: model.UpdateChannelTargetFromDbSystemDetails;
  /**
   * The user-friendly name for the Channel. It does not have to be unique.
   */
  "displayName"?: string;
  /**
   * Whether the Channel should be enabled or disabled. Enabling a previously
   * disabled Channel will cause the Channel to be started. Conversely, disabling
   * a previously enabled Channel will stop the Channel. Both operations are
   * executed asynchronously.
   *
   */
  "isEnabled"?: boolean;
  /**
   * User provided description of the Channel.
   */
  "description"?: string;
  /**
   * Simple key-value pair applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateChannelDetails {
  export function getJsonObj(obj: UpdateChannelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.UpdateChannelSourceDetails.getJsonObj(obj.source) : undefined,
        "target": obj.target ? model.UpdateChannelTargetDetails.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateChannelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.UpdateChannelSourceDetails.getDeserializedJsonObj(obj.source)
          : undefined,
        "target": obj.target
          ? model.UpdateChannelTargetDetails.getDeserializedJsonObj(obj.target)
          : undefined
      }
    };

    return jsonObj;
  }
}
