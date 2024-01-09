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
 * The information to update a Java Message Service Connection.
 *
 */
export interface UpdateJavaMessageServiceConnectionDetails extends model.UpdateConnectionDetails {
  /**
   * If set to true, Java Naming and Directory Interface (JNDI) properties should be provided.
   *
   */
  "shouldUseJndi"?: boolean;
  /**
   * The Connection Factory can be looked up using this name.
   * e.g.: 'ConnectionFactory'
   *
   */
  "jndiConnectionFactory"?: string;
  /**
   * The URL that Java Message Service will use to contact the JNDI provider.
   * e.g.: 'tcp://myjms.host.domain:61616?jms.prefetchPolicy.all=1000'
   *
   */
  "jndiProviderUrl"?: string;
  /**
   * The implementation of javax.naming.spi.InitialContextFactory interface
   * that the client uses to obtain initial naming context.
   * e.g.: 'org.apache.activemq.jndi.ActiveMQInitialContextFactory'
   *
   */
  "jndiInitialContextFactory"?: string;
  /**
   * Specifies the identity of the principal (user) to be authenticated.
   * e.g.: 'admin2'
   *
   */
  "jndiSecurityPrincipal"?: string;
  /**
   * The password associated to the principal.
   *
   */
  "jndiSecurityCredentials"?: string;
  /**
   * Connectin URL of the Java Message Service, specifying the protocol, host, and port.
   * e.g.: 'mq://myjms.host.domain:7676'
   *
   */
  "connectionUrl"?: string;
  /**
   * The of Java class implementing javax.jms.ConnectionFactory interface
   * supplied by the Java Message Service provider.
   * e.g.: 'com.stc.jmsjca.core.JConnectionFactoryXA'
   *
   */
  "connectionFactory"?: string;
  /**
   * The username Oracle GoldenGate uses to connect to the Java Message Service.
   * This username must already exist and be available by the Java Message Service to be connected to.
   *
   */
  "username"?: string;
  /**
   * The password Oracle GoldenGate uses to connect the associated Java Message Service.
   *
   */
  "password"?: string;
  /**
   * Security protocol for Java Message Service. If not provided, default is PLAIN.
   * Optional until 2024-06-27, in the release after it will be made required.
   *
   */
  "securityProtocol"?: string;
  /**
   * Authentication type for Java Message Service.  If not provided, default is NONE.
   * Optional until 2024-06-27, in the release after it will be made required.
   *
   */
  "authenticationType"?: string;
  /**
   * The base64 encoded content of the TrustStore file.
   *
   */
  "trustStore"?: string;
  /**
   * The TrustStore password.
   *
   */
  "trustStorePassword"?: string;
  /**
   * The base64 encoded content of the KeyStore file.
   *
   */
  "keyStore"?: string;
  /**
   * The KeyStore password.
   *
   */
  "keyStorePassword"?: string;
  /**
   * The password for the cert inside of the KeyStore.
   * In case it differs from the KeyStore password, it should be provided.
   *
   */
  "sslKeyPassword"?: string;
  /**
    * Deprecated: this field will be removed in future versions. Either specify the private IP in the connectionString or host 
* field, or make sure the host name is resolvable in the target VCN.
* <p>
The private IP address of the connection's endpoint in the customer's VCN, typically a
* database endpoint or a big data endpoint (e.g. Kafka bootstrap server).
* In case the privateIp is provided, the subnetId must also be provided.
* In case the privateIp (and the subnetId) is not provided it is assumed the datasource is publicly accessible.
* In case the connection is accessible only privately, the lack of privateIp will result in not being able to access the connection.
* 
    */
  "privateIp"?: string;

  "connectionType": string;
}

export namespace UpdateJavaMessageServiceConnectionDetails {
  export function getJsonObj(
    obj: UpdateJavaMessageServiceConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(
            obj
          ) as UpdateJavaMessageServiceConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "JAVA_MESSAGE_SERVICE";
  export function getDeserializedJsonObj(
    obj: UpdateJavaMessageServiceConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateJavaMessageServiceConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
