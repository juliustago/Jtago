pragma solidity ^0.8.0;

contract LeaseContract {
    struct LeaseAgreement {
        uint256 leaseId;
        address landowner;
        address tenant;
        uint256 duration;
        uint256 rentalPrice;
        string additionalConditions;
        bool isActive;
    }

    LeaseAgreement[] public leaseAgreements;
    uint256 public totalLeaseAgreements;

    event LeaseAgreementCreated(uint256 leaseId, address indexed landowner, address indexed tenant);

    function createLeaseAgreement(
        address _landowner,
        address _tenant,
        uint256 _duration,
        uint256 _rentalPrice,
        string memory _additionalConditions
    ) public {
        require(_landowner != address(0), "Invalid landowner address");
        require(_tenant != address(0), "Invalid tenant address");

        uint256 leaseId = totalLeaseAgreements++;

        leaseAgreements.push(
            LeaseAgreement({
                leaseId: leaseId,
                landowner: _landowner,
                tenant: _tenant,
                duration: _duration,
                rentalPrice: _rentalPrice,
                additionalConditions: _additionalConditions,
                isActive: true
            })
        );

        emit LeaseAgreementCreated(leaseId, _landowner, _tenant);
    }

    function getLeaseAgreement(uint256 _leaseId)
        public
        view
        returns (
            address landowner,
            address tenant,
            uint256 duration,
            uint256 rentalPrice,
            string memory additionalConditions,
            bool isActive
        )
    {
        require(_leaseId < totalLeaseAgreements, "Invalid lease agreement ID");

        LeaseAgreement memory lease = leaseAgreements[_leaseId];
        return (
            lease.landowner,
            lease.tenant,
            lease.duration,
            lease.rentalPrice,
            lease.additionalConditions,
            lease.isActive
        );
    }
}
