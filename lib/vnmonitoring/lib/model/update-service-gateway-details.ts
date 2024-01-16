/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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

export interface UpdateServiceGatewayDetails {
  /**
    * Whether the service gateway blocks all traffic through it. The default is {@code false}. When
* this is {@code true}, traffic is not routed to any services, regardless of route rules.
* <p>
Example: {@code true}
* 
    */
  "blockTraffic"?: boolean;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table the service gateway will use.
   * For information about why you would associate a route table with a service gateway, see
   * [Transit Routing: Private Access to Oracle Services](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitroutingoracleservices.htm).
   *
   */
  "routeTableId"?: string;
  /**
    * List of all the {@code Service} objects you want enabled on this service gateway. Sending an empty list
* means you want to disable all services. Omitting this parameter entirely keeps the
* existing list of services intact.
* <p>
You can also enable or disable a particular {@code Service} by using
* {@link #attachServiceId(AttachServiceIdRequest) attachServiceId} or
* {@link #detachServiceId(DetachServiceIdRequest) detachServiceId}.
* <p>
For each enabled {@code Service}, make sure there's a route rule with the {@code Service} object's {@code cidrBlock}
* as the rule's destination and the service gateway as the rule's target. See
* {@link RouteTable}.
* 
    */
  "services"?: Array<model.ServiceIdRequestDetails>;
}

export namespace UpdateServiceGatewayDetails {
  export function getJsonObj(obj: UpdateServiceGatewayDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.ServiceIdRequestDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateServiceGatewayDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.ServiceIdRequestDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
