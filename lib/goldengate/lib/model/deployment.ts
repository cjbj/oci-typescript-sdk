/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * A container for your OCI GoldenGate resources, such as the OCI GoldenGate deployment console.
 *
 */
export interface Deployment {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the deployment being referenced.
   *
   */
  "id": string;
  /**
   * An object's Display Name.
   *
   */
  "displayName"?: string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup being referenced.
   *
   */
  "deploymentBackupId"?: string;
  /**
   * The time the resource was created. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was last updated. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Possible lifecycle states.
   *
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Possible GGS lifecycle sub-states.
   *
   */
  "lifecycleSubState"?: model.LifecycleSubState;
  /**
   * Describes the object's current state in detail. For example, it can be used to provide
   * actionable information for a resource in a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * A simple key-value pair that is applied without any predefined name, type, or scope. Exists
* for cross-compatibility only.
* <p>
Example: {@code {\"bar-key\": \"value\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Tags defined for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * True if all of the aggregate resources are working correctly.
   *
   */
  "isHealthy"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet of the deployment's private endpoint.
   *
   */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a public subnet in the customer tenancy.
   * Can be provided only for public deployments. If provided, the loadbalancer will be created in this subnet instead of the service tenancy.
   * For backward compatiblity this is an optional property for now, but it will become mandatory (for public deployments only) after October 1, 2024.
   *
   */
  "loadBalancerSubnetId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the loadbalancer in the customer's subnet.
   * The loadbalancer of the public deployment created in the customer subnet.
   *
   */
  "loadBalancerId"?: string;
  /**
   * A three-label Fully Qualified Domain Name (FQDN) for a resource.
   *
   */
  "fqdn"?: string;
  /**
   * The Oracle license model that applies to a Deployment.
   *
   */
  "licenseModel": model.LicenseModel;
  /**
   * The Minimum number of OCPUs to be made available for this Deployment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount": number;
  /**
   * Indicates if auto scaling is enabled for the Deployment's CPU core count.
   *
   */
  "isAutoScalingEnabled": boolean;
  /**
   * An array of Network Security Group OCIDs used to define network access for either Deployments or Connections.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * True if this object is publicly available.
   *
   */
  "isPublic"?: boolean;
  /**
   * The public IP address representing the access point for the Deployment.
   *
   */
  "publicIpAddress"?: string;
  /**
   * The private IP address in the customer's VCN representing the access point for the
   * associated endpoint service in the GoldenGate service VCN.
   *
   */
  "privateIpAddress"?: string;
  /**
   * The URL of a resource.
   *
   */
  "deploymentUrl"?: string;
  /**
    * The system tags associated with this resource, if any. The system tags are set by Oracle
* Cloud Infrastructure services. Each key is predefined and scoped to namespaces.  For more
* information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {orcl-cloud: {free-tier-retain: true}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Indicates if the resource is the the latest available version.
   *
   */
  "isLatestVersion"?: boolean;
  /**
   * Note: Deprecated: Use timeOfNextMaintenance instead, or related upgrade records
   * to check, when deployment will be forced to upgrade to a newer version.
   * Old description:
   * The date the existing version in use will no longer be considered as usable
   * and an upgrade will be required.  This date is typically 6 months after the
   * version was released for use by GGS.  The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeUpgradeRequired"?: Date;
  /**
   * The amount of storage being utilized (in bytes)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageUtilizationInBytes"?: number;
  /**
   * Indicator will be true if the amount of storage being utilized exceeds the allowable storage utilization limit.  Exceeding the limit may be an indication of a misconfiguration of the deployment's GoldenGate service.
   *
   */
  "isStorageUtilizationLimitExceeded"?: boolean;
  /**
   * The type of deployment, which can be any one of the Allowed values.
   * NOTE: Use of the value 'OGG' is maintained for backward compatibility purposes.
   *     Its use is discouraged in favor of 'DATABASE_ORACLE'.
   *
   */
  "deploymentType": model.DeploymentType;
  "oggData"?: model.OggDeployment;
  "deploymentDiagnosticData"?: model.DeploymentDiagnosticData;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The time of next maintenance schedule. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeOfNextMaintenance"?: Date;
  /**
   * Type of the next maintenance.
   *
   */
  "nextMaintenanceActionType"?: model.MaintenanceActionType;
  /**
   * Description of the next maintenance.
   *
   */
  "nextMaintenanceDescription"?: string;
  "maintenanceConfiguration"?: model.MaintenanceConfiguration;
  /**
   * The time until OGG version is supported. After this date has passed OGG version will not be available anymore. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeOggVersionSupportedUntil"?: Date;
  /**
   * List of ingress IP addresses from where the GoldenGate deployment connects to this connection's privateIp.
   * Customers may optionally set up ingress security rules to restrict traffic from these IP addresses.
   *
   */
  "ingressIps"?: Array<model.IngressIpDetails>;
}

export namespace Deployment {
  export function getJsonObj(obj: Deployment): object {
    const jsonObj = {
      ...obj,
      ...{
        "oggData": obj.oggData ? model.OggDeployment.getJsonObj(obj.oggData) : undefined,
        "deploymentDiagnosticData": obj.deploymentDiagnosticData
          ? model.DeploymentDiagnosticData.getJsonObj(obj.deploymentDiagnosticData)
          : undefined,
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined,

        "maintenanceConfiguration": obj.maintenanceConfiguration
          ? model.MaintenanceConfiguration.getJsonObj(obj.maintenanceConfiguration)
          : undefined,

        "ingressIps": obj.ingressIps
          ? obj.ingressIps.map(item => {
              return model.IngressIpDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Deployment): object {
    const jsonObj = {
      ...obj,
      ...{
        "oggData": obj.oggData
          ? model.OggDeployment.getDeserializedJsonObj(obj.oggData)
          : undefined,
        "deploymentDiagnosticData": obj.deploymentDiagnosticData
          ? model.DeploymentDiagnosticData.getDeserializedJsonObj(obj.deploymentDiagnosticData)
          : undefined,
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getDeserializedJsonObj(obj.maintenanceWindow)
          : undefined,

        "maintenanceConfiguration": obj.maintenanceConfiguration
          ? model.MaintenanceConfiguration.getDeserializedJsonObj(obj.maintenanceConfiguration)
          : undefined,

        "ingressIps": obj.ingressIps
          ? obj.ingressIps.map(item => {
              return model.IngressIpDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
