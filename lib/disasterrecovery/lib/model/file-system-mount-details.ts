/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * Mount details of a file system.
 */
export interface FileSystemMountDetails {
  /**
    * The OCID of the mount target for this file system.
* <p>
Example: `ocid1.mounttarget.oc1..uniqueID`
* 
    */
  "mountTargetId": string;
}

export namespace FileSystemMountDetails {
  export function getJsonObj(obj: FileSystemMountDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FileSystemMountDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
