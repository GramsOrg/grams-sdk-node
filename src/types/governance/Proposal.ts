/**
 * Represents a proposal to be voted on in the governance system.
 */
export interface Proposal {
  /**
   * The ID of the proposal.
   */
  id: string;

  /**
   * The title of the proposal.
   */
  title: string;

  /**
   * The description of the proposal.
   */
  description: string;

  /**
   * The date the proposal was created.
   */
  createdAt: Date;

  /**
   * The date the proposal expires.
   */
  expiresAt: Date;

  /**
   * The number of yes votes.
   */
  yesVotes: number;

  /**
   * The number of no votes.
   */
  noVotes: number;
}
