import "./styles.css";

const pricecard = [
  {
    plan: "FREE",
    price: "$0",
    period: "/month",
    features: {
      users: ["Single User", "Multiple User"],
      storage: ["5GB Storgae"],
      pubprojects: ["Unlimited Public Projects"],
      accesstype: ["Cummunity Access"],
      privprojects: ["Unlimited Private Projects"],
      support: ["Dedicated Phone Support"],
      domain: ["Free Subdomain"],
      reports: ["Monthly Status Reports"]
    }
  },
  {
    plan: "PLUS",
    price: "$9",
    period: "/month",
    features: {
      users: ["5 Users"],
      storage: ["50GB Storgae"],
      pubprojects: ["Unlimited Public Projects"],
      accesstype: ["Cummunity Access"],
      privprojects: ["Unlimited Private Projects"],
      support: ["Dedicated Phone Support"],
      domain: ["Free Subdomain"],
      reports: ["Monthly Status Reports"]
    }
  },
  {
    plan: "PRO",
    price: "$49",
    period: "/month",
    features: {
      users: ["Unlimited Users"],
      storage: ["150GB Storgae"],
      pubprojects: ["Unlimited Public Projects"],
      accesstype: ["Cummunity Access"],
      privprojects: ["Unlimited Private Projects"],
      support: ["Dedicated Phone Support"],
      domain: ["Unlimited Free Subdomain"],
      reports: ["Monthly Status Reports"]
    }
  }
];

export default function App() {
  return (
    <div >
      <h1>Subscription Plans</h1>
      <Plans />
    </div>
  );
}

function Plans() {
  return (
    <div className="card-cont">
      {pricecard.map((plan) => (
        <Card
          plan={plan.plan}
          price={plan.price}
          period={plan.period}
          features={plan.features}
        />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div>
        <p className="plan">{props.plan}</p>
      </div>

      <div>
        <p className="price">
          <span className="amt">{props.price} </span>
          <span className="period">{props.period} </span>
        </p>
      </div>
      <div className="features">
        <ul>
          {Object.keys(props.features).map((key) => (
            <li className="f-list">{props.features[key].join(", ")}</li>
          ))}
        </ul>
      </div>

      <div className="btn-cont">
        <button className="button">BUY</button>
      </div>
    </div>
  );
}
