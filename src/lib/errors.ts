export class EntityStateError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class NoActiveEntityError extends EntityStateError {
  constructor(additionalInformation: string = '') {
    super(('No active entity to affect. ' + additionalInformation).trim());
  }
}

export class NoSuchEntityError extends EntityStateError {
  constructor(id: string) {
    super(`No entity for ID ${id}`);
  }
}

export class InvalidIdError extends EntityStateError {
  constructor(id: string | undefined) {
    super(`Invalid ID: ${id}`);
  }
}

export class InvalidIdOfError extends EntityStateError {
  constructor() {
    super(`idOf returned undefined`);
  }
}

export class UpdateFailedError extends EntityStateError {
  constructor(cause: Error) {
    super(`Updating entity failed.\n\tCause: ${cause}`);
  }
}

export class UnableToGenerateIdError extends EntityStateError {
  constructor(cause: string | Error) {
    super(`Unable to generate an ID.\n\tCause: ${cause}`);
  }
}

export class NoMatchingActionHandlerError extends EntityStateError {
  constructor(action: string) {
    super(`No matching handler for action '${action}' from ActionNames enum.`);
  }
}

export class NoSuchActionInEnumError extends EntityStateError {
  constructor(action: string) {
    super(`No such action '${action}' in ActionNames enum.`);
  }
}
