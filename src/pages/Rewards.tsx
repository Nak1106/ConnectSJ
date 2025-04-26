import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Gift,
  Award,
  CheckCircle,
  AlertCircle,
  Coffee,
  Scissors,
  ShoppingBag,
  Bus,
} from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

// Mock data for available rewards
const mockRewards = [
  {
    id: 1,
    name: "Food Coupon",
    description: "$10 voucher for local restaurants",
    pointsCost: 50,
    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <Coffee size={24} className="text-accent-600" />,
    category: "food",
  },
  {
    id: 2,
    name: "Haircut Voucher",
    description: "Free haircut at participating salons",
    pointsCost: 75,
    image:
      "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <Scissors size={24} className="text-accent-600" />,
    category: "services",
  },
  {
    id: 3,
    name: "Thrift Shop Credit",
    description: "$15 credit at Community Thrift",
    pointsCost: 60,
    image:
      "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <ShoppingBag size={24} className="text-accent-600" />,
    category: "clothing",
  },
  {
    id: 4,
    name: "Bus Pass",
    description: "7-day VTA transit pass",
    pointsCost: 100,
    image:
      "https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon: <Bus size={24} className="text-accent-600" />,
    category: "transportation",
  },
];

// Mock data for redemption history
const mockRedemptionHistory = [
  {
    id: 101,
    rewardName: "Food Coupon",
    date: "2025-03-10",
    pointsCost: 50,
    status: "completed",
  },
  {
    id: 102,
    rewardName: "Bus Pass",
    date: "2025-02-22",
    pointsCost: 100,
    status: "completed",
  },
];

const Rewards: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("available");
  const [userPoints, setUserPoints] = useState(120); // Mock initial points
  const [redeemed, setRedeemed] = useState<number[]>([]);
  const [redemptionHistory, setRedemptionHistory] = useState(
    mockRedemptionHistory
  );
  const [showConfirmation, setShowConfirmation] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRedeem = (rewardId: number, pointsCost: number) => {
    // First show confirmation
    setShowConfirmation(rewardId);
  };

  const confirmRedemption = (rewardId: number, pointsCost: number) => {
    // Check if user has enough points
    if (userPoints < pointsCost) {
      setShowConfirmation(null);
      return;
    }

    // Process redemption
    setUserPoints((prev) => prev - pointsCost);
    setRedeemed([...redeemed, rewardId]);

    // Add to history
    const reward = mockRewards.find((r) => r.id === rewardId);
    if (reward) {
      const today = new Date().toISOString().slice(0, 10);
      setRedemptionHistory([
        {
          id: Date.now(),
          rewardName: reward.name,
          date: today,
          pointsCost: reward.pointsCost,
          status: "completed",
        },
        ...redemptionHistory,
      ]);
    }

    // Hide confirmation and show success
    setShowConfirmation(null);
    setShowSuccess(true);

    // Auto-hide success after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const cancelRedemption = () => {
    setShowConfirmation(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="min-h-screen pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-primary-600 text-white p-6 pt-16 pb-8">
        <motion.div variants={itemVariants} className="flex items-center">
          <div className="bg-white/20 rounded-full p-3 mr-4">
            <Gift size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{t("rewards.title")}</h1>
            <p className="text-primary-100">
              {t("rewards.yourPoints")}:{" "}
              <span className="font-semibold">{userPoints}</span>
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="px-6 mt-4 mb-4">
        <div className="flex border-b border-neutral-200">
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "available"
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-neutral-500"
            }`}
            onClick={() => setActiveTab("available")}
          >
            {t("rewards.availableRewards")}
          </button>
          <button
            className={`flex-1 py-3 text-center font-medium ${
              activeTab === "history"
                ? "text-primary-600 border-b-2 border-primary-600"
                : "text-neutral-500"
            }`}
            onClick={() => setActiveTab("history")}
          >
            {t("rewards.redeemHistory")}
          </button>
        </div>
      </motion.div>

      {/* Success notification */}
      {showSuccess && (
        <motion.div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bg-success-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
            <CheckCircle size={20} className="mr-2" />
            <span>Reward redeemed successfully!</span>
          </div>
        </motion.div>
      )}

      <div className="px-6 flex gap-4 flex-wrap justify-center">
        {activeTab === "available" ? (
          mockRewards.map((reward) => (
            <motion.div
              key={reward.id}
              variants={itemVariants}
              className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              style={{ height: "300px" }}
            >
              <Card className="overflow-hidden p-0 h-full w-full flex flex-col">
                <div className="h-2/3 overflow-hidden">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between h-1/3">
                  <div>
                    <h3 className="text-lg font-semibold">{reward.name}</h3>
                    <p className="text-sm text-neutral-600">
                      {reward.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <span className="text-sm bg-primary-50 text-primary-700 px-2 py-1 rounded-full flex items-center justify-center whitespace-nowrap">
                      <Award size={14} className="mr-1" />
                      {reward.pointsCost} {t("incentives.points")}
                    </span>
                    <Button
                      variant={
                        userPoints >= reward.pointsCost ? "primary" : "outline"
                      }
                      size="sm"
                      className={
                        userPoints < reward.pointsCost
                          ? "text-neutral-400 border-neutral-300"
                          : ""
                      }
                      icon={
                        userPoints >= reward.pointsCost ? (
                          <CheckCircle size={16} />
                        ) : (
                          <AlertCircle size={16} />
                        )
                      }
                      onClick={() => handleRedeem(reward.id, reward.pointsCost)}
                      disabled={userPoints < reward.pointsCost}
                    >
                      {userPoints >= reward.pointsCost
                        ? t("rewards.redeem")
                        : `${t("rewards.pointsNeeded")}: ${reward.pointsCost}`}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        ) : redemptionHistory.length > 0 ? (
          redemptionHistory.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="mb-4">
              <Card className="p-4 border-none bg-neutral-50">
                <div className="flex items-center">
                  <div className="rounded-full bg-success-100 p-3 mr-4">
                    <CheckCircle size={24} className="text-success-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-800">
                      {item.rewardName}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-sm flex items-center justify-center whitespace-nowrap">
                      <Award size={14} className="mr-1" />
                      {item.pointsCost}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants} className="text-center py-12">
            <div className="mb-4 text-neutral-400">
              <Gift size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-neutral-600 mb-2">
              No Redemption History
            </h3>
            <p className="text-neutral-500 mb-4">
              You haven't redeemed any rewards yet.
            </p>
            <Button variant="outline" onClick={() => setActiveTab("available")}>
              Browse Available Rewards
            </Button>
          </motion.div>
        )}
      </div>

      <NavBar onLogout={() => {}} />
    </motion.div>
  );
};

export default Rewards;
