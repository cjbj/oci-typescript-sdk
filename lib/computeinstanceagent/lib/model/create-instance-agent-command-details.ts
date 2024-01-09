/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
 * 
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
 * Creation details for an Oracle Cloud Agent command.
 */
export interface CreateInstanceAgentCommandDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment to create the command in.
   */
  "compartmentId": string;
  /**
   * The amount of time that Oracle Cloud Agent is given to run the command on the instance before timing
   * out. The timer starts when Oracle Cloud Agent starts the command. Zero means no timeout.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "executionTimeOutInSeconds": number;
  /**
    * A user-friendly name for the command. It does not have to be unique.
* Avoid entering confidential information.
* <p>
Example: `Database Backup Script`
* 
    */
  "displayName"?: string;
  /**
   * The target instance to run the command on.
   */
  "target": model.InstanceAgentCommandTarget;
  /**
   * The contents of the command.
   */
  "content": model.InstanceAgentCommandContent;
}

export namespace CreateInstanceAgentCommandDetails {
  export function getJsonObj(obj: CreateInstanceAgentCommandDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.InstanceAgentCommandTarget.getJsonObj(obj.target) : undefined,
        "content": obj.content
          ? model.InstanceAgentCommandContent.getJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateInstanceAgentCommandDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target
          ? model.InstanceAgentCommandTarget.getDeserializedJsonObj(obj.target)
          : undefined,
        "content": obj.content
          ? model.InstanceAgentCommandContent.getDeserializedJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
}
