/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { CertificatesManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class CertificatesManagementWaiter {
  public constructor(
    private client: CertificatesManagementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAssociation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAssociationResponse
   */
  public async forAssociation(
    request: serviceRequests.GetAssociationRequest,
    ...targetStates: models.AssociationLifecycleState[]
  ): Promise<serviceResponses.GetAssociationResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getAssociation(request),
      response => targetStates.includes(response.association.lifecycleState!)
    );
  }

  /**
   * Waits forCaBundle till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCaBundleResponse | null (null in case of 404 response)
   */
  public async forCaBundle(
    request: serviceRequests.GetCaBundleRequest,
    ...targetStates: models.CaBundleLifecycleState[]
  ): Promise<serviceResponses.GetCaBundleResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCaBundle(request),
      response => targetStates.includes(response.caBundle.lifecycleState!),
      targetStates.includes(models.CaBundleLifecycleState.Deleted)
    );
  }

  /**
   * Waits forCertificate till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCertificateResponse | null (null in case of 404 response)
   */
  public async forCertificate(
    request: serviceRequests.GetCertificateRequest,
    ...targetStates: models.CertificateLifecycleState[]
  ): Promise<serviceResponses.GetCertificateResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCertificate(request),
      response => targetStates.includes(response.certificate.lifecycleState!),
      targetStates.includes(models.CertificateLifecycleState.Deleted)
    );
  }

  /**
   * Waits forCertificateAuthority till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCertificateAuthorityResponse | null (null in case of 404 response)
   */
  public async forCertificateAuthority(
    request: serviceRequests.GetCertificateAuthorityRequest,
    ...targetStates: models.CertificateAuthorityLifecycleState[]
  ): Promise<serviceResponses.GetCertificateAuthorityResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCertificateAuthority(request),
      response => targetStates.includes(response.certificateAuthority.lifecycleState!),
      targetStates.includes(models.CertificateAuthorityLifecycleState.Deleted)
    );
  }
}
