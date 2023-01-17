/**
 * Audit API
 * API for the Audit Service. Use this API for compliance monitoring in your tenancy.
For more information, see [Overview of Audit](/iaas/Content/Audit/Concepts/auditoverview.htm).

**Tip**: This API is good for queries, but not bulk-export operations.

 * OpenAPI spec version: 20190901
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
 * A container object for request attributes.
 *
 */
export interface Request {
  /**
   * The opc-request-id of the request.
   *
   */
  "id"?: string;
  /**
    * The full path of the API request.
* <p>
Example: `/20160918/instances/ocid1.instance.oc1.phx.<unique_ID>`
* 
    */
  "path"?: string;
  /**
    * The HTTP method of the request.
* <p>
Example: `GET`
* 
    */
  "action"?: string;
  /**
   * The parameters supplied by the caller during this operation.
   *
   */
  "parameters"?: { [key: string]: Array<string> };
  /**
    * The HTTP header fields and values in the request.
* <p>
Example: 
* <p>
  -----
*     {
*       \"opc-principal\": [
*         \"{\\\"tenantId\\\":\\\"ocid1.tenancy.oc1..<unique_ID>\\\",\\\"subjectId\\\":\\\"ocid1.user.oc1..<unique_ID>\\\",\\\"claims\\\":[{\\\"key\\\":\\\"pstype\\\",\\\"value\\\":\\\"natv\\\",\\\"issuer\\\":\\\"authService.oracle.com\\\"},{\\\"key\\\":\\\"h_host\\\",\\\"value\\\":\\\"iaas.r2.oracleiaas.com\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"h_opc-request-id\\\",\\\"value\\\":\\\"<unique_ID>\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"ptype\\\",\\\"value\\\":\\\"user\\\",\\\"issuer\\\":\\\"authService.oracle.com\\\"},{\\\"key\\\":\\\"h_date\\\",\\\"value\\\":\\\"Wed, 18 Sep 2019 00:10:58 UTC\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"h_accept\\\",\\\"value\\\":\\\"application/json\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"authorization\\\",\\\"value\\\":\\\"Signature headers=\\\\\\\"date (request-target) host accept opc-request-id\\\\\\\",keyId=\\\\\\\"ocid1.tenancy.oc1..<unique_ID>/ocid1.user.oc1..<unique_ID>/8c:b4:5f:18:e7:ec:db:08:b8:fa:d2:2a:7d:11:76:ac\\\\\\\",algorithm=\\\\\\\"rsa-pss-sha256\\\\\\\",signature=\\\\\\\"<unique_ID>\\\\\\\",version=\\\\\\\"1\\\\\\\"\\\",\\\"issuer\\\":\\\"h\\\"},{\\\"key\\\":\\\"h_(request-target)\\\",\\\"value\\\":\\\"get /20160918/instances/ocid1.instance.oc1.phx.<unique_ID>\\\",\\\"issuer\\\":\\\"h\\\"}]}\"
*       ],
*       \"Accept\": [
*         \"application/json\"
*       ],
*       \"X-Oracle-Auth-Client-CN\": [
*         \"splat-proxy-se-02302.node.ad2.r2\"
*       ],
*       \"X-Forwarded-Host\": [
*         \"compute-api.svc.ad1.r2\"
*       ],
*       \"Connection\": [
*         \"close\"
*       ],
*       \"User-Agent\": [
*         \"Jersey/2.23 (HttpUrlConnection 1.8.0_212)\"
*       ],
*       \"X-Forwarded-For\": [
*         \"172.24.80.88\"
*       ],
*       \"X-Real-IP\": [
*         \"172.24.80.88\"
*       ],
*       \"oci-original-url\": [
*         \"https://iaas.r2.oracleiaas.com/20160918/instances/ocid1.instance.oc1.phx.<unique_ID>\"
*       ],
*       \"opc-request-id\": [
*         \"<unique_ID>\"
*       ],
*       \"Date\": [
*         \"Wed, 18 Sep 2019 00:10:58 UTC\"
*       ]
*     }              
*   -----
* 
    */
  "headers"?: { [key: string]: Array<string> };
}

export namespace Request {
  export function getJsonObj(obj: Request): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Request): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
