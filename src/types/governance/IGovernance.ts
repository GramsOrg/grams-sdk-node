import { Proposal } from "../";

/**
 * Represents a governance system that allows stakeholders to participate in decision-making.
 */
export interface IGovernance {
    /**
     * Gets the current proposal to vote on.
     */
    getCurrentProposal(): Proposal;
    
    /**
     * Votes in favor of the current proposal.
     */
    voteYes(): void;
    
    /**
     * Votes against the current proposal.
     */
    voteNo(): void;
    
    /**
     * Gets the current list of proposals.
     */
    getProposals(): Proposal[];
    
    /**
     * Adds a new proposal to the governance system.
     * @param proposal - The proposal to add.
     */
    addProposal(proposal: Proposal): void;
    
    /**
     * Removes a proposal from the governance system.
     * @param proposalId - The ID of the proposal to remove.
     */
    removeProposal(proposalId: string): void;
}
